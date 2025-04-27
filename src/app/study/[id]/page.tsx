import Line from "@/components/common/Line";
import Stack from "@/components/common/Stack";
import StudyCard from "@/components/ui/StudyListCard";
import { Studyroom } from "@/types/entity/Studyroom";
import StudyApplyRender from "./StudyApplyRender";

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
