const Header = ({
  headerTitle,
  titleClassName,
}: {
  headerTitle?: string;
  titleClassName?: string;
}) => {
  return (
    <header className="flex items-center justify-between">
      {headerTitle ? <h1>{headerTitle}</h1> : <div />}
    </header>
  );
};

export default Header;
