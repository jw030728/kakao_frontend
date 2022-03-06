type titleType = {
  title: string;
};

const Title = (props: titleType) => {
  const { title } = props;
  return <h1>{title}</h1>;
};

export default Title;
