import Line from "@/components/common/Line";
import Stack from "@/components/common/Stack";
import Text from "@/components/common/Text";
import { Studyroom } from "@/types/entity/Studyroom";

export default function StudyCard({ studyroom }: { studyroom: Studyroom }) {
  return (
    <Stack.H className="w-full h-auto border border-my-muted-3 rounded-lg p-4 bg-white" align="start">
      <Stack.V className="w-5/6 h-full">
        <Text.base className="font-semibold">{studyroom.title}</Text.base>
        <Line.H />
        <Text.sm className="text-sm">{studyroom.description}</Text.sm>
      </Stack.V>
      <Stack.V className="w-1/6 h-full" justify="start" align="center">
        <StatusBadge status={studyroom.status} />
        <Text.sm className="text-sm">{`${studyroom.member_current}/${studyroom.member_max}`}</Text.sm>
      </Stack.V>
    </Stack.H>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusStyle = status === "모집중" ? "bg-my-positive" : status === "모집완료" ? "bg-my-muted" : "";
  return (
    <Text.sm nowrap className={`rounded-xl px-1 py-0.5 text-white ${statusStyle}`}>
      {status}
    </Text.sm>
  );
}
