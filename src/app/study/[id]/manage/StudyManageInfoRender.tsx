"use client";

import Stack from "@/components/common/Stack";
import Title from "@/components/common/Title";
import ButtonLayout from "@/components/layout/ButtonLayout";
import InputLayout from "@/components/layout/InputLayout";
import SelectLayout from "@/components/layout/SelectLayout";
import TextareaLayout from "@/components/layout/TextareaLayout";
import clsx from "clsx";
import { useState } from "react";

export default function StudyManageInfoRender() {
  const [editing, setEditing] = useState(false);
  const [studyDescription, setStudyDescription] = useState("React 웹 개발 실무 프로젝트를 함께 진행합니다.");
  const [maxMember, setMaxMember] = useState(5);
  const [recruitmentStatus, setRecruitmentStatus] = useState("모집 중");

  return (
    <Stack.V className="w-full rounded-xl p-4 bg-white">
      {/* 스터디 정보 영역 */}
      <Stack.H className="w-full" justify="between">
        <Title.h3>리액트 웹 개발 스터디</Title.h3>
        <ButtonLayout className="rounded-xl px-3 py-1 bg-my-primary text-white" onClick={() => setEditing(!editing)}>
          수정
        </ButtonLayout>
      </Stack.H>
      <TextareaLayout
        className={clsx(
          "w-full rounded-md p-2 text-sm",
          editing ? "bg-white text-black" : "bg-my-muted-4 text-my-muted"
        )}
        value={studyDescription}
        onChange={(e) => setStudyDescription(e.target.value)}
        disabled={!editing}
      />

      {/* 모집 설정 영역 */}
      <Stack.H className="w-full" justify="between" align="start">
        {/* 최대 인원 영역 */}
        <Stack.V className="w-1/4 whitespace-nowrap">
          <Title.h6>최대 인원</Title.h6>
          <Stack.H className="w-full">
            <InputLayout
              className={clsx(
                "w-full rounded-md p-2 text-sm",
                editing ? "bg-white text-black" : "bg-my-muted-4 text-my-muted"
              )}
              value={maxMember.toString()}
              onChange={(e) => setMaxMember(Number(e.target.value))}
              disabled={!editing}
            />
            명
          </Stack.H>
        </Stack.V>

        {/* 모집 상태 영역 */}
        <Stack.V className="w-1/2 whitespace-nowrap">
          <Title.h6>모집 상태</Title.h6>
          <SelectLayout
            className={clsx(
              "w-full rounded-md p-2 text-sm",
              editing ? "bg-white text-black" : "bg-my-muted-4 text-my-muted"
            )}
            value={recruitmentStatus}
            onChange={(e) => setRecruitmentStatus(e.target.value)}
            disabled={!editing}
          >
            <option value="1">모집 중</option>
            <option value="2">모집 완료</option>
            <option value="3">모집 중단</option>
          </SelectLayout>
        </Stack.V>
      </Stack.H>
    </Stack.V>
  );
}
