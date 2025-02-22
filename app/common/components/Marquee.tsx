// Yes <marquee> is deprecated
// I don't care, it should come back
import { HTMLAttributes } from 'react';

// eslint-disable-next-line @typescript-eslint/no-deprecated
type MarqueeProps = HTMLAttributes<HTMLMarqueeElement>;

export default function Marquee(props: MarqueeProps): JSX.Element {
  return <marquee {...props}>{props.children}</marquee>;
}
