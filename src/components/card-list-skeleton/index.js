import ContentLoader from "react-content-loader";

export default function CardListSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={600}
      viewBox="0 0 300 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ margin: "20px" }}
    >
      <rect x="0" y="0" width="300" height="450" />
    </ContentLoader>
  );
}
