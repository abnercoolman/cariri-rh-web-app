import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function MenuButton({ title, titleIcon, isActive = false, toLink }) {
  return (
    <Container isActive={isActive} to={toLink}>
      <span className="material-symbols-outlined">{titleIcon}</span>
      <h1>{title}</h1>
    </Container>
  );
}
