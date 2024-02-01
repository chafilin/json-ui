import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Dropdown } from "../components/Dropdown";
import { Img } from "../components/Img";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { Textarea } from "../components/Textarea";
import { TransformedView } from "../types";

type ComponentViewProps = {
  tree: TransformedView;
};

export const ComponentView = ({ tree }: ComponentViewProps) => {
  switch (tree.type) {
    case "container":
      return (
        <Container key={tree.id} keyId={tree.id}>
          {tree.children?.map((child) => {
            return <ComponentView key={child.id} tree={child} />;
          })}
        </Container>
      );
    case "button":
      return <Button key={tree.id} keyId={tree.id} />;
    case "image":
      return <Img key={tree.id} keyId={tree.id} />;
    case "text":
      return <Text key={tree.id} keyId={tree.id} />;
    case "textfield":
      return <Input key={tree.id} keyId={tree.id} />;
    case "textarea":
      return <Textarea key={tree.id} keyId={tree.id} />;
    case "dropdown":
      return <Dropdown key={tree.id} keyId={tree.id} />;
    default:
      return (
        <p key={tree.id} id={tree.id}>
          {"Unknown type: " + tree.type}
        </p>
      );
  }
};
