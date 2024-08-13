// Yes <marquee> is deprecated
// I don't care, it should come back
import { HTMLAttributes } from 'react';

type MarqueeProps = HTMLAttributes<HTMLMarqueeElement>;

export default function Marquee(props: MarqueeProps): JSX.Element {
  return <marquee {...props}>{props.children}</marquee>;
}
