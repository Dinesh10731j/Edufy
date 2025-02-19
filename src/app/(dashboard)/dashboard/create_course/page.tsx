"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import EditorJS from "@editorjs/editorjs";

const EditorJs = dynamic(() => import("@/components/editorJs"), { ssr: false });

const CreateCourse = () => {
  const editorRef = useRef<EditorJS | null>(null);

  const handleEditorInit = (editor: EditorJS) => {
    editorRef.current = editor;
  };
  return (
    <div className="p-4  min-h-screen w-full">
      <EditorJs onInit={handleEditorInit} />
    </div>
  );
};

export default CreateCourse;
