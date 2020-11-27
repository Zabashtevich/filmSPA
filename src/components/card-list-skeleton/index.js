import ContentLoader from "react-content-loader";

export default function CardListSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={300}
      viewBox="0 0 300 450"
      backgroundColor="#eee"
      foregroundColor="#f5f5f5"
      style={{ margin: "1rem", borderRadius: "10px" }}
    >
      <rect x="0" y="0" width="300" height="450" />
    </ContentLoader>
  );
}
