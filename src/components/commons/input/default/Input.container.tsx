import { Wrapper } from './Input.style';
import { IPropsInput } from './Input.types';

export default function Input(props: IPropsInput) {
  return (
    <Wrapper>
      <input type="text" id={props.id} />
    </Wrapper>
  );
}
