import { Title } from "@/components/atoms/Title/Title";
import { CardTag } from "./Card.styled";
import { Text } from "@/components/atoms/Text/Text";
import { Wrap } from "@/components/atoms/Wrap/Wrap";
import { GitHubSvg } from "@/components/atoms/GitHubSvg/GitHubSvg";
import Link from "next/link";
import { ViewServer } from "@/components/atoms/ViewServer/ViewServer";
import { CardM } from "./Card.model";

export const Card = ({
  title,
  text,
  tech,
  urlImage,
  viewGitHub,
  viewServer,
}: CardM) => {
  return (
    <CardTag flexDirection="row" width="fit-content">
      <Wrap
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap="5.6rem"
      >
        <Title width="100%" text={title} color="#000" />
        <Text text={text} fontWeight="400" />
        <Wrap
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <Text text="Tech used" fontSize="1.9rem" fontWeight="700" />
          <Wrap justifyContent="space-between">{tech}</Wrap>
        </Wrap>
      </Wrap>
      <Wrap flexDirection="column" gap="1rem" alignItems="center">
        <Wrap
          isImage="yes"
          urlImage={urlImage}
          width="26.6rem"
          height="22.7rem"
        />
        <Wrap width="fit-content" gap="1.7rem" justifyContent="space-between">
          <Link href={viewGitHub} rel="noopener noreferrer" target="_blank">
            <Wrap
              cursor="pointer"
              padding="0.5rem"
              width="fit-content"
              borderRadius="2rem"
              backGround="#FFF"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            >
              <GitHubSvg />
            </Wrap>
          </Link>
          {viewServer ? (
            <Link href={viewServer} rel="noopener noreferrer" target="_blank">
              <Wrap
                cursor="pointer"
                padding="0.5rem"
                width="fit-content"
                borderRadius="2rem"
                backGround="#FFF"
                boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              >
                <ViewServer />
              </Wrap>
            </Link>
          ) : null}
        </Wrap>
      </Wrap>
    </CardTag>
  );
};
