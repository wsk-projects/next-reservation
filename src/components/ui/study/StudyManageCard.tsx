import Stack from "@/components/common/Stack";
import { Studyroom } from "@/types/entity/Studyroom";
import Link from "next/link";

export default function StudyCardManage({ studyroom }: { studyroom: Studyroom }) {
  return (
    <Stack.H className="w-full h-auto border border-my-muted-3 rounded-lg p-4 bg-white" align="start">
      {/* 스터디 정보 영역 */}
      <Stack.V className="w-5/6 h-full">
        <p className="font-semibold">{studyroom.title}</p>
        <p className="text-sm">{`${studyroom.member_current}/${studyroom.member_max}명 참여 중`}</p>
        {/* TODO: 주기, 일정 설정 */}
      </Stack.V>

      {/* 스터디 관리 영역 */}
      <Stack.V className="w-1/6 h-full">
        <Link href={`/study/${studyroom.id}/manage`} className="rounded-xl px-2 py-0.5 bg-my-muted-3 whitespace-nowrap">
          관리
        </Link>
        <StatusBadge status={studyroom.status} />
      </Stack.V>
    </Stack.H>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusStyle = status === "모집중" ? "bg-my-positive" : status === "모집완료" ? "bg-my-muted" : "";
  return <div className={`rounded-xl px-1 py-0.5 text-white text-sm whitespace-nowrap ${statusStyle}`}>{status}</div>;
}
