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

  const handleSubmit = async () => {
    if (editorRef.current) {
      try {
        const savedData = await editorRef.current.save();
        console.log("Editor Data:", savedData);
      } catch (error) {
        console.error("Error saving editor data:", error);
      }
    }
  };

  return (
    <div className="p-4  min-h-screen w-full">
      <EditorJs onInit={handleEditorInit} />
      <button
        onClick={handleSubmit}
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save Data
      </button>
    </div>
  );
};

export default CreateCourse;
