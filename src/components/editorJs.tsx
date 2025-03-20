"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import Header from "@editorjs/header";
import TableTool from "@editorjs/table";
import WarningTool from "@editorjs/warning";
import ChecklistTool from "@editorjs/checklist";
import ListTool from "@editorjs/list";
import EmbedTool from "@editorjs/embed";
import InlineCodeTool from "@editorjs/inline-code";
import QuoteTool from "@editorjs/quote";
import RawTool from "@editorjs/raw";
import { useDispatch } from "react-redux";
import { addToast } from "@/redux/slices/toastSlice";
import { UseCreateCourse } from "@/hooks/useCreateCourse";
import {EditorContent,EditorBlock} from "@/utils/types";
import { UseUploadImage } from "@/hooks/useUploadImage";

interface EditorjsProps {
  onInit: (editor: EditorJS) => void;
}

const EditorJs: React.FC<EditorjsProps> = ({ onInit }) => {
  const editorJsRef = useRef<EditorJS | null>(null);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [hashtags, setHashtags] = useState("");
  const course = UseCreateCourse();
  const uploadMutation = UseUploadImage()

  useEffect(() => {
    if (!editorJsRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        autofocus: true,
        defaultBlock: "paragraph",
        placeholder: "Start creating courses.....",
        tools: {
          paragraph: {
            class: Paragraph as ToolConstructable,
            config: {
              inlineToolbar: ["bold", "italic", "inlineCode", "link", "marker"],
            },
          },
          image: {
            class: ImageTool as ToolConstructable,
            config: {
             uploader:{
              async uploadByFile(file: File) {
                try{
                  const formData = new FormData();
                  formData.append('image', file);
                  const url = uploadMutation.mutateAsync(formData);
                  return{
                    success:1,
                    file:{
                      url
                    }
                   
                  }

                }catch(error:unknown){
                  if(error instanceof Error){
                    throw new Error(error.message);
                  }else{
                    console.error("Image upload failed:", error);
                    return { success: 0, message: "Image upload failed. Try again." };
                  }
                }
              },
             }
            },
          },
          code: { class: CodeTool },
          header: {
            class: Header as unknown as ToolConstructable,
            config: { levels: [1, 2, 3, 4, 5, 6], defaultLevel: 2 },
          },
          checklist: { class: ChecklistTool },
          list: { class: ListTool as unknown as ToolConstructable },
          table: { class: TableTool as unknown as ToolConstructable },
          warning: { class: WarningTool },
          embed: { class: EmbedTool },
          inlineCode: { class: InlineCodeTool },
          quote: { class: QuoteTool },
          raw: { class: RawTool },
        },
      });
      editorJsRef.current = editor;
      onInit(editor);
    }
    return () => {
      if (
        editorJsRef.current &&
        typeof editorJsRef.current.destroy === "function"
      ) {
        editorJsRef.current.destroy();
        editorJsRef.current = null;
      }
    };
  }, [onInit, uploadMutation]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleHashtagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtags(e.target.value);
  };

  const handleSubmit = async () => {
    if (!title.trim() || !hashtags.trim()) {
      dispatch(
        addToast({
          type: "error",
          message: "Title and hashtags cannot be empty.",
        })
      );
      return;
    }

    if (editorJsRef.current) {
      try {
        const savedData = await editorJsRef.current.save();
        if (!savedData.blocks.length) {
          dispatch(
            addToast({
              type: "error",
              message: "Editor content cannot be empty.",
            })
          );

          return;
        }
        const courseData: EditorContent = {
          title,
          hashtags,
          time: savedData.time || Date.now(),
          version: savedData.version || "",
          blocks: savedData.blocks.map((block) => ({
            id: block.id || "",
            type: block.type as EditorBlock["type"],
            data: block.data,
          })),
        };

        console.log("This is the editor js data",courseData);
        
     
        
        course.mutate(courseData);
      } catch (error) {
        console.error("Error saving editor data:", error);
      }
    }
  };

  return (
    <div className="w-full p-4">
      <input
        type="text"
        placeholder="Enter the title of the course"
        className="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Enter hashtags (e.g. #webdev #react)"
        className="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
        value={hashtags}
        onChange={handleHashtagChange}
      />
      <div
        id="editorjs"
        className="w-full min-h-screen shadow-md p-3 overflow-hidden"
      ></div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create Course
      </button>
    </div>
  );
};

export default EditorJs;
