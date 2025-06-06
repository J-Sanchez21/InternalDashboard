import "./WordBubble.css";

interface WordBubbleProps {
  word: string;
  group: string;
  type: string;
  check?: boolean;
  onClick?: () => void;
  handleChange?: any;
  handleInput?: (e: any) => void;
}

export default function WordBubble({
  word,
  group,
  type,
  check,
  onClick,
  handleChange,
  handleInput,
}: WordBubbleProps) {
  return (
    <>
      <label className={`WordBubble ${group}`} onClick={onClick}>
        {word}
        <input
          value={word}
          type={type}
          name={group}
          checked={check}
          onChange={() => handleChange()}
          onInput={handleInput}
        ></input>
      </label>
    </>
  );
}
