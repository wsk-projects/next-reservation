"use client";

import Stack from "@/components/common/Stack";
import ButtonLayout from "@/components/layout/button/ButtonLayout";
import InputLayout from "@/components/layout/form/InputLayout";
import ModalLayout from "@/components/layout/modal/ModalLayout";
import Container from "@/components/layout/wrapper/Container";
import Show from "@/components/util/Show";
import { useState } from "react";

export default function StudyApplyRender() {
  const [isShow, setIsShow] = useState(false);

  // TODO: 기능구현: 신청 버튼 클릭 시 ajax 요청 및 입력값 검증
  const submitForm = (timeout: number) => {
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, timeout);
  };

  return (
    <>
      <Stack.V defaultStyle={false} className="w-full rounded-xl p-4 gap-4 bg-my-background-4">
        {/* 이름 입력란 */}
        <Container>
          <h2>
            이름<span className="text-red-700">*</span>
          </h2>
          <InputLayout
            className="w-full h-8 rounded-md p-2"
            placeholder="이름을 입력해주세요.(필수)"
            onChange={() => {}}
          />
        </Container>

        {/* 연락처 입력란 */}
        <Container>
          <h2>
            연락처<span className="text-red-700">*</span>
          </h2>
          <InputLayout
            className="w-full h-8 rounded-md p-2"
            placeholder="연락처를 입력해주세요.(필수)"
            onChange={() => {}}
          />
        </Container>

        {/* 소개글 입력란 */}
        <Container>
          <h2>간단 소개글</h2>
          <textarea
            className="w-full h-24 rounded-md p-2 resize-none"
            placeholder="간단한 자기소개를 입력해주세요."
            onChange={() => {}}
          />
        </Container>

        {/* 신청 버튼 */}
        <ButtonLayout className="w-full rounded-md py-2 bg-my-primary text-white" onClick={() => submitForm(5000)}>
          신청하기
        </ButtonLayout>
      </Stack.V>

      <Show when={isShow}>
        <ModalLayout className="left-0 bottom-24 right-0 w-3/4 rounded-lg px-6 py-3 mx-auto bg-my-positive-2">
          <p className="text-my-positive">신청이 완료되었습니다!</p>
        </ModalLayout>
      </Show>
    </>
  );
}
