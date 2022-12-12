export default function ButtonWithProps(props) {
  const { url, text } = props;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export function ButtonDestructured({ url, text }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
export const ButtonSecondary = () => <button>Mi segundo boton</button>;
