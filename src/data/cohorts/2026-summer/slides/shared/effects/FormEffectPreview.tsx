import React from 'react';
import { TextCursor, ChevronDown, Check, Upload } from 'lucide-react';

type FieldType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'upload';

interface FormField {
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  value?: string;
  options?: string[];
}

interface FormEffectPreviewProps {
  fields: FormField[];
  title?: string;
  submitLabel?: string;
}

// 表单最终效果预览（只读，模拟 Element Plus 暗色表单）
export const FormEffectPreview: React.FC<FormEffectPreviewProps> = ({ fields, title, submitLabel = '提交' }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes form-effect-shine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <TextCursor className="h-4 w-4 text-indigo-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="relative rounded-2xl bg-slate-900/70 border border-slate-700/80 p-5 sm:p-6 overflow-hidden">
        {/* 顶部高光扫过 */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
          style={{ animation: 'form-effect-shine 3.5s ease-in-out infinite' }}
        />
        <div className="space-y-4">
          {fields.map((field, i) => (
            <div key={`${field.label}-${i}`} className="space-y-1.5">
              <label className="flex items-center space-x-1 text-[11px] font-bold text-slate-300">
                <span>{field.label}</span>
                {field.required && <span className="text-rose-400">*</span>}
              </label>

              {field.type === 'text' && (
                <div className="flex items-center px-3 h-9 rounded-md bg-slate-950/80 border border-slate-700 focus-within:border-indigo-500/60 transition-colors">
                  <input
                    readOnly
                    defaultValue={field.value}
                    placeholder={field.placeholder}
                    className="flex-1 bg-transparent text-xs text-slate-200 placeholder-slate-600 outline-none"
                  />
                </div>
              )}

              {field.type === 'textarea' && (
                <textarea
                  readOnly
                  rows={3}
                  defaultValue={field.value}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 rounded-md bg-slate-950/80 border border-slate-700 focus-within:border-indigo-500/60 text-xs text-slate-200 placeholder-slate-600 outline-none resize-none transition-colors"
                />
              )}

              {field.type === 'select' && (
                <div className="flex items-center justify-between px-3 h-9 rounded-md bg-slate-950/80 border border-slate-700 focus-within:border-indigo-500/60 cursor-default transition-colors">
                  <span className="text-xs text-slate-200">{field.value || field.placeholder}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                </div>
              )}

              {field.type === 'checkbox' && (
                <label className="flex items-center space-x-2 cursor-default">
                  <span className="h-4 w-4 rounded border border-indigo-500 bg-indigo-500/30 flex items-center justify-center">
                    <Check className="h-3 w-3 text-indigo-200" />
                  </span>
                  <span className="text-xs text-slate-300">{field.value || field.placeholder || field.label}</span>
                </label>
              )}

              {field.type === 'radio' && (
                <div className="flex flex-wrap items-center gap-4">
                  {(field.options || ['选项一', '选项二']).map((opt, oi) => (
                    <label key={oi} className="flex items-center space-x-2 cursor-default">
                      <span className={`h-4 w-4 rounded-full border flex items-center justify-center ${oi === 0 ? 'border-indigo-500' : 'border-slate-600'}`}>
                        {oi === 0 && <span className="h-2 w-2 rounded-full bg-indigo-400" />}
                      </span>
                      <span className="text-xs text-slate-300">{opt}</span>
                    </label>
                  ))}
                </div>
              )}

              {field.type === 'upload' && (
                <div className="flex items-center justify-center px-3 h-20 rounded-md bg-slate-950/80 border border-dashed border-slate-600 hover:border-indigo-500/60 transition-colors cursor-default">
                  <div className="flex flex-col items-center space-y-1">
                    <Upload className="h-4 w-4 text-slate-500" />
                    <span className="text-[10px] text-slate-500">{field.placeholder || '点击或拖拽文件上传'}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-end space-x-2 border-t border-slate-700/60 pt-4">
          <button type="button" className="px-4 h-8 rounded-md text-xs text-slate-300 border border-slate-600 hover:bg-slate-800 transition-colors">
            取消
          </button>
          <button
            type="button"
            className="px-4 h-8 rounded-md text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-900/40 transition-colors"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
