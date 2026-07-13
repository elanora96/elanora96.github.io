// Yes <marquee> is deprecated
// I don't care, it should come back
import type { HTMLAttributes } from "react";

type MarqueeProps = HTMLAttributes<HTMLMarqueeElement>;

export default function Marquee(props: MarqueeProps): JSX.Element {
	// biome-ignore lint/a11y/noDistractingElements: Actually that's the point
	return <marquee {...props}>{props.children}</marquee>;
}
