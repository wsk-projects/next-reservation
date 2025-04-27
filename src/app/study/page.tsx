import Stack from "@/components/common/Stack";
import { Studyroom } from "@/types/entity/Studyroom";
import SearchRender from "./render/SearchRender";
import Link from "next/link";

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
          <StudyCard key={study.id} studyroom={study} />
        ))}
      </Stack.V>
    </Stack.V>
  );
}

function StudyCard({ studyroom }: { studyroom: Studyroom }) {
  return (
    <Link href={`/study/${studyroom.id}`}>
      <Stack.H className="w-full h-auto border border-my-muted-3 rounded-lg p-4 bg-white" align="start">
        <Stack.V className="w-5/6 h-full">
          <p className="font-semibold">{studyroom.title}</p>
          <div className="w-full h-px bg-my-muted-2"></div>
          <p className="text-sm">{studyroom.description}</p>
        </Stack.V>
        <Stack.V className="w-1/6 h-full" justify="start" align="center">
          <StatusBadge status={studyroom.status} />
          <div className="text-sm">{`${studyroom.member_current}/${studyroom.member_max}`}</div>
        </Stack.V>
      </Stack.H>
    </Link>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusStyle = status === "모집중" ? "bg-my-positive" : status === "모집완료" ? "bg-my-muted" : "";
  return <div className={`rounded-xl px-1 py-0.5 text-white text-sm whitespace-nowrap ${statusStyle}`}>{status}</div>;
}
