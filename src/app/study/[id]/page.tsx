export default function StudyPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Study</h1>
      <h2>{params.id}</h2>
    </div>
  );
}
