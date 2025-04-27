import Stack from "@/components/common/Stack";
import { Studyroom } from "@/types/entity/Studyroom";
import Link from "next/link";
import SearchRender from "./SearchRender";
import StudyCard from "@/components/ui/study/StudyListCard";

const _studyList: Studyroom[] = [
  {
    id: "1",
    title: "파이썬 알고리즘 스터디",
    description: "알고리즘 기초부터 심화까지 함께 공부하는 스터디입니다.",
    member_current: 3,
    member_max: 8,
    status: "모집중",
  },
  {
    id: "2",
    title: "리액트 웹 개발 스터디",
    description: "React 웹 개발 실무 프로젝트를 함께 진행합니다.",
    member_current: 2,
    member_max: 4,
    status: "모집중",
  },
  {
    id: "3",
    title: "디자인 패턴 스터디",
    description: "객체지향 디자인 패턴을 학습하고 적용해봅니다.",
    member_current: 5,
    member_max: 5,
    status: "모집완료",
  },
];

export default function StudyPage() {
  return (
    <Stack.V defaultStyle={false} className="gap-4">
      {/* 검색 영역 */}
      <Stack.H className="w-full h-12 rounded-lg px-4 bg-my-background-3" justify="between">
        {/* TODO: 기능구현: 검색 기능 */}
        <SearchRender />
      </Stack.H>

      {/* 필터 영역 */}
      <Stack.H className="w-full h-12 rounded-lg px-4 bg-my-background-3" justify="between">
        {/* TODO: 기능구현: 모집 중만 보기 */}
        <Stack.H>
          <input type="checkbox" />
          <span>모집 중만 보기</span>
        </Stack.H>
        {/* TODO: 기능구현: 정렬 기능 */}
        <select className="rounded-md">
          <option value="recent">최신순</option>
          <option value="old">오래된순</option>
        </select>
      </Stack.H>

      {/* 스터디 목록 영역 */}
      <Stack.V className="w-full h-full rounded-lg">
        {/* TODO: 기능구현: 스터디 목록 표시 */}
        {_studyList.map((study) => (
          <Link href={`/study/${study.id}`}>
            <StudyCard key={study.id} studyroom={study} />
          </Link>
        ))}
      </Stack.V>
    </Stack.V>
  );
}
