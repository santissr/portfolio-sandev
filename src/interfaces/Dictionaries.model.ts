export interface LangM {
  header: Header;
  main: Main;
  aboutMe: AboutMe;
  projects: Projects;
  contact: Contact;
}

export interface AboutMe {
  title: string;
  text: string;
}

export interface Contact {
  title: string;
  text: string;
  textButton: string;
}

export interface Header {
  navBar: NavBar[];
}

export interface NavBar {
  text: string;
  url: string;
}

export interface Main {
  firstText: string;
  name: string;
  secondText: string;
}

export interface Projects {
  title: string;
  text: string;
  projectsCard: ProjectsCard[];
}

export interface ProjectsCard {
  title: string;
  text: string;
  tech: string[];
  image: string;
  viewServer: string;
}
