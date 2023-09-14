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
    <CardTag>
      <Wrap
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Title width="100%" text={title} color="#000" />
        <Text text={text} fontWeight="400" />
        <Text text="Tech used" fontSize="1.9rem" fontWeight="700" />
        <Wrap justifyContent="space-between">{tech}</Wrap>
      </Wrap>
      <Wrap flexDirection="column" gap="1rem" alignItems="center">
        <Wrap
          isImage="yes"
          urlImage={urlImage}
          width="26.6rem"
          height="22.7rem"
        />
        <Wrap width="fit-content">
          <Link href={viewGitHub}>
            <Wrap>
              <GitHubSvg size="30" />
            </Wrap>
          </Link>
          <Link href={viewServer}>
            <Wrap>
              <ViewServer />
            </Wrap>
          </Link>
        </Wrap>
      </Wrap>
    </CardTag>
  );
};
