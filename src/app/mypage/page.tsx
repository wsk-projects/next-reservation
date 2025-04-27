import Stack from "@/components/common/Stack";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import CircleLayout from "@/components/layout/CircleLayout";
import StudyCard from "@/components/ui/StudyListCard";
import StudyManageCard from "@/components/ui/StudyManageCard";
import { Studyroom } from "@/types/entity/Studyroom";
import Link from "next/link";

const _studyroom: Studyroom = {
  id: "1",
  title: "파이썬 알고리즘 스터디",
  description: "알고리즘 기초부터 심화까지 함께 공부하는 스터디입니다.",
  member_current: 3,
  member_max: 8,
  status: "모집중",
};

export default function MypagePage() {
  return (
    <Stack.V className="w-full h-full" justify="start">
      {/* 프로필 영역 */}
      <Stack.V className="w-full p-4">
        <Stack.H className="w-full p-4 border border-my-muted-3 bg-white rounded-lg">
          {/* 프로필사진 */}
          <Stack.V>
            <CircleLayout className="w-20 h-20 bg-my-muted-3"></CircleLayout>
          </Stack.V>

          {/* 설명란 */}
          <Stack.V className="w-full h-full p-2" justify="start" align="start">
            <Stack.H className="w-full justify-between">
              <Title.h5 bold>닉네임</Title.h5>
              <Link href="/mypage/edit" className="rounded-xl px-2 py-0.5 bg-my-muted-3 whitespace-nowrap">
                <Text.sm>수정</Text.sm>
              </Link>
            </Stack.H>
            <Text.sm className="text-sm">자기소개</Text.sm>
          </Stack.V>
        </Stack.H>
      </Stack.V>

      {/* 내가 만든 스터디 영역 */}
      <Stack.V className="w-full p-4">
        <Title.h4 bold>내가 만든 스터디</Title.h4>
        {/* TODO: 실제 데이터 삽입 */}
        <StudyManageCard studyroom={_studyroom} />
        <StudyManageCard studyroom={_studyroom} />
      </Stack.V>

      {/* 신청/참여 현황 영역 */}
      <Stack.V className="w-full p-4">
        <Title.h4 bold>신청/참여 현황</Title.h4>
        {/* TODO: 실제 데이터 삽입 */}
        <Link href="/study/_studyroom.id">
          <StudyCard studyroom={_studyroom} />
        </Link>
        <Link href="/study/_studyroom.id">
          <StudyCard studyroom={_studyroom} />
        </Link>
      </Stack.V>
    </Stack.V>
  );
}
