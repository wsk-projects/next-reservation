import Stack from "@/components/common/Stack";
import Title from "@/components/common/Title";
import ButtonLayout from "@/components/layout/ButtonLayout";
import { Applicant } from "@/types/entity/Applicant";
import StudyManageApplicantRender from "./StudyManageApplicantRender";
import StudyManageInfoRender from "./StudyManageInfoRender";

const _applicants: Applicant[] = [
  {
    id: "1",
    name: "홍길동",
    phone: "010-1234-5678",
    description: "안녕하세요",
  },
];

export default function StudyManagePage({ params }: { params: { id: string } }) {
  return (
    <Stack.V defaultStyle={false} className="w-full gap-4" justify="start">
      {/* 정보 수정 영역 */}
      <StudyManageInfoRender />

      {/* 신청자 관리 영역 */}
      <Stack.V className="w-full rounded-xl p-4 bg-white">
        <Title.h3>신청자 관리</Title.h3>
        <Stack.V className="w-full">
          <StudyManageApplicantRender applicants={_applicants} />
        </Stack.V>
        <Stack.H className="w-full" justify="around">
          <ButtonLayout className="w-1/3 py-2 rounded-lg bg-my-positive text-white">수락</ButtonLayout>
          <ButtonLayout className="w-1/3 py-2 rounded-lg bg-my-negative text-white">거절</ButtonLayout>
        </Stack.H>
      </Stack.V>
    </Stack.V>
  );
}
