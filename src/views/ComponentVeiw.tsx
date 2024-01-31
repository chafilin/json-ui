import { useState } from "react";
import type { Component } from "../types";
import { Container } from "../components/Container";
import { Img } from "../components/Img";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import { Dropdown } from "../components/Dropdown";

type ComponentProps = {
  component: Component;
  keyId: string;
};

export const ComponentView = ({ component, keyId }: ComponentProps) => {
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const type = component.type;

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const style = {
    ...component.style.webStyle,
    ...(hover ? component.style.actions?.onHover : {}),
    ...(focus ? component.style.actions?.onFocus : {}),
  };

  switch (type) {
    case "container":
      return (
        <Container
          styles={style}
          key={keyId + "_" + type}
          keyId={keyId + "_" + type}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {component.children?.map((child, index) => {
            return (
              <ComponentView
                component={child}
                key={keyId + "_" + index}
                keyId={keyId + "_" + index}
              />
            );
          })}
        </Container>
      );
    case "text":
      return (
        <Text
          value={component.data?.value || ""}
          styles={style}
          keyId={keyId + "_" + type}
          key={keyId + "_" + type}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      );
    case "image":
      return (
        <Img
          src={component.value || ""}
          styles={style}
          keyId={keyId + "_" + type}
          key={keyId + "_" + type}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      );
    case "textfield":
      return (
        <Input
          styles={style}
          keyId={keyId + "_" + type}
          placeholder={component.data?.placeholder || ""}
          value={component.data?.value || ""}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          key={keyId + "_" + type}
        />
      );
    case "textarea":
      return (
        <Textarea
          styles={style}
          keyId={keyId + "_" + type}
          placeholder={component.data?.placeholder || ""}
          value={component.data?.value || ""}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          key={keyId + "_" + type}
        />
      );
    case "button":
      return (
        <Button
          keyId={keyId + "_" + type}
          key={keyId + "_" + type}
          title={component.data?.title || ""}
          styles={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      );
    case "dropdown":
      return (
        <Dropdown
          keyId={keyId + "_" + type}
          key={keyId + "_" + type}
          values={component.data?.value || []}
          styles={style}
        />
      );
    default:
      return <h1>Unknown</h1>;
  }
};
