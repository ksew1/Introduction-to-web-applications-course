export interface Topic {
  title: string;
  description: string;
  expandedDescription: string;
}

export const topics: Topic[] = [
  {
    title: 'The basics',
    description: 'Core Angular basics you have to know',
    expandedDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat molestiae facilis vel similique ullam? Reiciendis eum modi aliquam. Voluptatibus quas delectus quis aliquam alias? Quisquam ad laudantium consequuntur tempora.',
  },
  {
    title: 'Components',
    description: 'Components are a core concept for building Angular UIs and apps',
    expandedDescription: 'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces',
  },
  {
    title: 'Events',
    description: 'Events are important in Angular',
    expandedDescription: 'Events allow you to trigger code on demand!',
  },
];
