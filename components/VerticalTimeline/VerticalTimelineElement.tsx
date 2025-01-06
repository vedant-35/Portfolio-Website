import clsx from "clsx";
import { InView } from "react-intersection-observer";
import type { VerticalTimelineElementProps } from "./VerticalTimelineTypes";
import "./VerticalTimelineElement.css";
import { Fragment } from "react";

const VerticalTimelineElement = ({
    children = "",
    className = "",
    contentArrowStyle,
    contentStyle,
    date = "",
    dateClassName = "",
    icon = null,
    iconClassName = "",
    iconOnClick,
    onTimelineElementClick,
    iconStyle,
    id = "",
    position = "",
    style,
    textClassName = "",
    intersectionObserverProps = {
        rootMargin: "0px 0px -40px 0px",
        triggerOnce: true,
    },
    visible = false,
    shadowSize = "small", // small | medium | large
}: VerticalTimelineElementProps) => (
    <InView {...intersectionObserverProps}>
        {({ inView, ref }) => (
            <div
                ref={ref}
                id={id}
                className={clsx(className, "vertical-timeline-element", {
                    "vertical-timeline-element--left": position === "left",
                    "vertical-timeline-element--right": position === "right",
                    "vertical-timeline-element--no-children": children === "",
                })}
                style={style}
            >
                <Fragment>
                    <span // eslint-disable-line jsx-a11y/no-static-element-interactions
                        style={iconStyle}
                        onClick={iconOnClick}
                        className={clsx(
                            iconClassName,
                            "vertical-timeline-element-icon",
                            `shadow-size-${shadowSize}`, // for shadow size
                            {
                                "bounce-in": inView || visible,
                                "is-hidden": !(inView || visible),
                            },
                        )}
                    >
                        {icon}
                    </span>
                    <div
                        style={contentStyle}
                        onClick={onTimelineElementClick}
                        className={clsx(
                            textClassName,
                            "vertical-timeline-element-content",
                            {
                                "bounce-in": inView || visible,
                                "is-hidden": !(inView || visible),
                            },
                        )}
                    >
                        <div
                            style={contentArrowStyle}
                            className="vertical-timeline-element-content-arrow"
                        />
                        {children}
                        <span
                            className={clsx(
                                dateClassName,
                                "vertical-timeline-element-date",
                            )}
                        >
                            {date}
                        </span>
                    </div>
                </Fragment>
            </div>
        )}
    </InView>
);

export default VerticalTimelineElement;