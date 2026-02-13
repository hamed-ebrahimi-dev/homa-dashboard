"use client";

import { useCallback, useState } from "react";
import { Upload, X, FileIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface FileUploaderProps {
  onFileSelect?: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number;
  accept?: string;
  className?: string;
}

export const FileUploader = ({
  onFileSelect,
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024,
  accept = "*",
  className,
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const droppedFiles = Array.from(e.dataTransfer.files);
      const validFiles = droppedFiles.filter((file) => file.size <= maxSize);

      if (files.length + validFiles.length <= maxFiles) {
        const newFiles = [...files, ...validFiles].slice(0, maxFiles);
        setFiles(newFiles);
        onFileSelect?.(newFiles);
      }
    },
    [files, maxFiles, maxSize, onFileSelect]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter((file) => file.size <= maxSize);

    if (files.length + validFiles.length <= maxFiles) {
      const newFiles = [...files, ...validFiles].slice(0, maxFiles);
      setFiles(newFiles);
      onFileSelect?.(newFiles);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFileSelect?.(newFiles);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        className={cn(
          "border-2 border-dashed rounded-[16px] p-8 text-center transition-colors",
          isDragging ? "border-primary-600 bg-primary-50" : "border-gray-200 bg-gray-50"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <Upload className="w-6 h-6 text-primary-600" />
          </div>

          <div className="space-y-2">
            <p className="text-[14px] text-gray-900">
              فایل‌های خود را اینجا بکشید یا{" "}
              <label className="text-primary-600 cursor-pointer hover:underline">
                انتخاب کنید
                <input
                  type="file"
                  multiple
                  accept={accept}
                  onChange={handleFileInput}
                  className="hidden"
                />
              </label>
            </p>
            <p className="text-[12px] text-gray-500">
              حداکثر {maxFiles} فایل، هر فایل حداکثر {Math.round(maxSize / 1024 / 1024)} مگابایت
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-[8px]"
            >
              <button
                onClick={() => removeFile(index)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 flex-1 justify-end">
                <div className="text-right">
                  <p className="text-[14px] text-gray-900">{file.name}</p>
                  <p className="text-[12px] text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
                <FileIcon className="w-5 h-5 text-primary-600" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
