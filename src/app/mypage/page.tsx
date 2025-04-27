import Stack from "@/components/common/Stack";
import CircleLayout from "@/components/layout/circle/CircleLayout";
import StudyCard from "@/components/ui/study/StudyListCard";
import StudyManageCard from "@/components/ui/study/StudyManageCard";
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
              <p className="font-semibold">닉네임</p>
              <Link href="/mypage/edit" className="rounded-xl px-2 py-0.5 bg-my-muted-3 whitespace-nowrap">
                <p>수정</p>
              </Link>
            </Stack.H>
            <p className="text-sm">자기소개</p>
          </Stack.V>
        </Stack.H>
      </Stack.V>

      {/* 내가 만든 스터디 영역 */}
      <Stack.V className="w-full p-4">
        <p className="font-semibold">내가 만든 스터디</p>
        {/* TODO: 실제 데이터 삽입 */}
        <StudyManageCard studyroom={_studyroom} />
        <StudyManageCard studyroom={_studyroom} />
      </Stack.V>

      {/* 신청/참여 현황 영역 */}
      <Stack.V className="w-full p-4">
        <p className="font-semibold">신청/참여 현황</p>
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
