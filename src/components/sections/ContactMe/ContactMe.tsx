import { Wrap } from "@/components/atoms/Wrap/Wrap";
import { ContactMeTag } from "./ContactMe.styled";
import { Title } from "@/components/atoms/Title/Title";
import { Text } from "@/components/atoms/Text/Text";
import { ContactCont } from "@/components/organisms/ContactCont/ContactCont";

interface ContactI {
  id?: string;
}

export const ContactMe = ({ id }: ContactI) => {
  return (
    <ContactMeTag id={id}>
      <Wrap
        flexDirection="column"
        alignItems="center"
        gap="2rem"
        maxWidth="61.2rem"
      >
        <Wrap
          width="fit-content"
          borderBottom="1px solid #000"
          justifyContent="center"
        >
          <Title text="Contact" color="#007ACC" />
        </Wrap>
        <Text text="If you are interested in my profile, please do not hesitate to get in touch with me. I am available for a conversation or interview at any convenient time. I look forward to the opportunity to work together and contribute value to your company." />
      </Wrap>
      <ContactCont />
    </ContactMeTag>
  );
};
