type AcationBarProps = {
  title: string;
  children: React.ReactNode;
};

const ActionBar = ({ title, children }: AcationBarProps) => {
  return (
    <div>
      <h1>{title}</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
