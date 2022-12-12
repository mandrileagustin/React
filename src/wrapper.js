export default function Wrapper({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {children}
    </div>
  );
}
