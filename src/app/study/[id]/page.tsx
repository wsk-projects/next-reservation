import Line from "@/components/common/Line";
import Stack from "@/components/common/Stack";
import { Studyroom } from "@/types/entity/Studyroom";
import StudyApplyRender from "./render/StudyApplyRender";

const _studyroom: Studyroom = {
  id: "1",
  title: "파이썬 알고리즘 스터디",
  description: "알고리즘 기초부터 심화까지 함께 공부하는 스터디입니다.",
  member_current: 3,
  member_max: 8,
  status: "모집중",
};

export default function StudyPage({ params }: { params: { id: string } }) {
  return (
    <Stack.V>
      {/* 상세 정보 영역 */}
      <StudyCard studyroom={_studyroom} />

      <Line.H />

      {/* 신청 영역 */}
      <StudyApplyRender />
    </Stack.V>
  );
}

function StudyCard({ studyroom }: { studyroom: Studyroom }) {
  return (
    <Stack.H className="w-full h-auto border border-my-muted-3 rounded-lg p-4 bg-white" align="start">
      <Stack.V className="w-5/6 h-full">
        <p className="font-semibold">{studyroom.title}</p>
        <Line.H />
        <p className="text-sm">{studyroom.description}</p>
      </Stack.V>
      <Stack.V className="w-1/6 h-full" justify="start" align="center">
        <StatusBadge status={studyroom.status} />
        <div className="text-sm">{`${studyroom.member_current}/${studyroom.member_max}`}</div>
      </Stack.V>
    </Stack.H>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusStyle = status === "모집중" ? "bg-my-positive" : status === "모집완료" ? "bg-my-muted" : "";
  return <div className={`rounded-xl px-1 py-0.5 text-white text-sm whitespace-nowrap ${statusStyle}`}>{status}</div>;
}
