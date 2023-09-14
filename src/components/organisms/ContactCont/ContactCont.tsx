import { ContactSvg } from "@/components/atoms/ContactSvg/ContactSvg";
import { Text } from "@/components/atoms/Text/Text";
import { Wrap } from "@/components/atoms/Wrap/Wrap";
import { LinkedinSvg } from "@/svgs/infoSvg/LinkedinSvg";
import { MailSvg } from "@/svgs/infoSvg/MailSvg";

const info = [
  {
    svg: <ContactSvg />,
    text: "+57 3124631337",
  },
  {
    svg: <MailSvg />,
    text: "santi.sanchez.restrepo@gmail.com",
  },
  {
    svg: <LinkedinSvg />,
    text: "Santiago Sanchez Restrepo",
  },
];

export const ContactCont = () => {
  return (
    <Wrap
      maxWidth="38.5rem"
      padding="2rem"
      borderRadius="2rem"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Wrap gap="1.5rem" alignItems="flex-start" flexDirection="column">
        {info.map(({ svg, text }) => (
          <Wrap key={text} gap="0.8rem" alignItems="center">
            {svg}
            <Text fontSize="1.8rem" fontWeight="400" text={text} />
          </Wrap>
        ))}
      </Wrap>
    </Wrap>
  );
};
