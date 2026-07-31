'use client';

import React from 'react';
import {
  CheckCircle2,
  TextCursor,
  ChevronDown,
  Upload,
  LayoutGrid,
  Layers,
  Tag,
  Calendar,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';
import { DayDeckRenderer } from '../../../../types';
import {
  CoverSlide,
  AgendaSlide,
  ConceptSlide,
  ComparisonSlide,
  CodeBoxSlide,
  TerminalSlide,
  PromptSlide,
  ExerciseSlide,
  SummarySlide,
  QuizSlide,
  AnimationSlide,
  EffectSlide,
} from './shared/layouts';
import { ComponentShowcaseWall, FormEffectPreview } from './shared/effects';
import { FormInteractionAnimation } from './shared/animations';

// #1 封面：Element Plus 组件库
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第四阶段：现代前端"
    badgeText="Day 5 · 课程讲义"
    title="Element Plus 组件库"
    subtitle="用 UI 组件库高效搭建「此刻」帖子发布表单"
    bullets={[
      '企业级 Vue 3 UI 组件库，开箱即用',
      'el-form / el-upload / el-select 一行调用',
      '90 分钟完成「此刻」发布表单：标题 / 内容 / 图片 / 分类',
    ]}
  />
);

// #2 议程：Day 5 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 5 学习路线图"
    subtitle="从组件库认知到帖子发布表单整合，5 个目标串成一条线"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '认知组件库', desc: '理解 UI 组件库的价值与 Element Plus 在 Vue 3 生态中的定位' },
      { title: '安装配置', desc: '在 Vue 3 项目中安装并按需引入 Element Plus 与图标包' },
      { title: '掌握 ElForm', desc: '使用 el-form 双向绑定、rules 规则与表单校验' },
      { title: '实现上传', desc: '用 el-upload 完成图片上传与 before-upload 前置校验' },
      { title: '整合表单', desc: '组装「此刻」帖子发布表单并跑通完整交互流' },
    ]}
  />
);

// #3 概念：UI 组件库的价值
const Slide03: React.FC = () => (
  <ConceptSlide
    title="UI 组件库的价值"
    subtitle="为什么团队宁愿依赖组件库，也不自己造轮子"
    badgeText="核心概念"
    bullets={[
      '一致性：统一设计规范、间距与配色，告别各页面风格漂移',
      '效率：日期选择、上传、级联等复杂控件一行标签即可用',
      '可维护：组件由社区/团队统一维护，升级与修 bug 只需改依赖',
      '无障碍：内置 ARIA、键盘导航与焦点管理，开箱符合 a11y 标准',
    ]}
    keyTakeaway="组件库让团队把精力放在业务，而非重复造轮子。"
  />
);

// #4 对比：手写组件 vs 组件库
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="手写组件 vs 组件库"
    subtitle="同样一个带校验的上传表单，两种路径的代价"
    leftLabel="传统方案"
    rightLabel="推荐方案"
    left={{
      title: '手写组件',
      items: [
        '日期选择器 / 上传控件要数天手写',
        '每个项目风格不一、难以统一',
        '无障碍与键盘导航需自行实现',
        'Bug 自行兜底，长期维护成本高',
      ],
    }}
    right={{
      title: '组件库',
      items: [
        'el-date-picker / el-upload 一行调用',
        '统一设计 Token，全站风格一致',
        '内置 ARIA 标签与键盘导航',
        '社区维护、持续迭代、开箱即用',
      ],
    }}
    keyTakeaway="开箱即用 + 统一规范，是组件库对团队的最大红利。"
  />
);

// #5 概念：Element Plus 介绍
const Slide05: React.FC = () => (
  <ConceptSlide
    title="Element Plus 介绍"
    subtitle="Vue 3 时代企业级中后台组件库的首选"
    badgeText="技术选型"
    bullets={[
      'Vue 3 生态：基于 Composition API 与 TypeScript 重写，类型完备',
      '丰富组件：50+ 组件覆盖表单、布局、数据展示与反馈',
      '按需引入：配合 unplugin 自动按需加载，显著减小打包体积',
      '主题定制：通过 CSS Variables 与 SCSS 变量深度定制主题',
    ]}
    keyTakeaway="Element Plus 是 Vue 3 时代企业级中后台首选组件库。"
  />
);

// #6 终端：安装 Element Plus
const Slide06: React.FC = () => (
  <TerminalSlide
    title="安装 Element Plus"
    subtitle="一条命令装好组件库、图标包与按需引入插件"
    commands={[
      {
        comment: '安装组件库与图标包',
        cmd: 'npm install element-plus @element-plus/icons-vue',
        expected: 'added 42 packages in 8s',
      },
      {
        comment: '安装按需引入插件（开发依赖）',
        cmd: 'npm install -D unplugin-auto-import unplugin-vue-components',
        expected: 'added 6 packages in 3s',
      },
    ]}
    takeaway="装完记得在 vite.config.ts 配置 ElementPlusResolver 才会生效。"
  />
);

// #7 代码：按需引入配置
const Slide07: React.FC = () => (
  <CodeBoxSlide
    title="按需引入配置"
    subtitle="vite.config.ts 接入 unplugin 三件套，自动注册组件与 API"
    language="ts"
    filename="vite.config.ts"
    highlightLines={[10, 11, 12]}
    code={`import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    // 自动按需引入 ElMessage / ElLoading 等 API
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    // 自动按需注册 <el-*> 组件
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
});
`}
    takeaway="配置后无需手动 import 组件，ElMessage 等函数式 API 也会被自动引入。"
  />
);

// #8 动画：表单组件动效
const Slide08: React.FC = () => (
  <AnimationSlide
    title="表单组件动效"
    subtitle="观察一个表单字段从聚焦 → 输入 → 校验 → 通过 的完整生命周期"
    animationType="FormInteraction"
    caption="紫色=聚焦 · 青色=输入 · 琥珀=校验中 · 绿色=通过"
    takeaway="校验不是提交时才发生，blur/trigger 时机即可实时反馈。"
  >
    <FormInteractionAnimation
      fields={[
        { label: '标题', type: 'text' },
        { label: '内容', type: 'textarea' },
        { label: '分类', type: 'select' },
      ]}
      steps={[
        { label: '聚焦标题', field: 0, action: 'focus', desc: '点击标题输入框' },
        { label: '输入标题', field: 0, action: 'input', desc: '键入「今天的此刻」' },
        { label: '校验标题', field: 0, action: 'validate', desc: '触发 required 规则' },
        { label: '标题通过', field: 0, action: 'pass', desc: '校验通过' },
        { label: '聚焦内容', field: 1, action: 'focus', desc: '进入正文文本域' },
        { label: '输入内容', field: 1, action: 'input', desc: '填写正文' },
        { label: '内容通过', field: 1, action: 'pass', desc: '长度达标' },
        { label: '提交表单', field: 2, action: 'validate', desc: '点击「发布此刻」' },
      ]}
    />
  </AnimationSlide>
);

// #9 代码：ElForm 基础用法
const Slide09: React.FC = () => (
  <CodeBoxSlide
    title="ElForm 基础用法"
    subtitle="el-form + el-form-item + v-model，三件套实现双向绑定"
    language="vue"
    filename="CreatePost.vue"
    highlightLines={[3, 8, 13]}
    code={`<script setup lang="ts">
import { reactive } from 'vue';

const postForm = reactive({ title: '', category: '' });
</script>

<template>
  <el-form :model="postForm" label-width="72px">
    <el-form-item label="标题">
      <el-input v-model="postForm.title" placeholder="分享此刻的想法..." />
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="postForm.category" placeholder="请选择">
        <el-option label="日常" value="daily" />
        <el-option label="二次元" value="anime" />
        <el-option label="游戏" value="game" />
      </el-select>
    </el-form-item>
  </el-form>
</template>
`}
    takeaway="el-form 的 :model 与 el-input 的 v-model 共享同一响应式对象，即双向绑定。"
  />
);

// #10 代码：表单校验规则
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="表单校验规则"
    subtitle="rules + prop + trigger，把校验逻辑交给组件库"
    language="vue"
    filename="PostFormRules.vue"
    highlightLines={[6, 7, 8, 9, 10, 11, 20]}
    code={`<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

const formRef = ref<FormInstance>();
const postForm = reactive({ title: '', content: '' });

const rules: FormRules = {
  title: [{ required: true, message: '标题必填', trigger: 'blur' }],
  content: [
    { required: true, message: '内容必填', trigger: 'blur' },
    { min: 10, message: '至少 10 个字', trigger: 'blur' },
  ],
};

const submit = async () => {
  await formRef.value?.validate(); // 校验失败会抛错
  // 校验通过 → 调接口提交
};
</script>

<template>
  <el-form ref="formRef" :model="postForm" :rules="rules">
    <el-form-item label="标题" prop="title">
      <el-input v-model="postForm.title" />
    </el-form-item>
    <el-form-item label="内容" prop="content">
      <el-input v-model="postForm.content" type="textarea" />
    </el-form-item>
    <el-button type="primary" @click="submit">发布</el-button>
  </el-form>
</template>
`}
    takeaway="el-form-item 的 prop 必须与 rules 的 key 对齐；trigger:'blur' 在失焦时校验。"
  />
);

// #11 代码：ElUpload 上传组件
const Slide11: React.FC = () => (
  <CodeBoxSlide
    title="ElUpload 上传组件"
    subtitle="图片上传 + action + before-upload，把不合格的文件挡在上传前"
    language="vue"
    filename="CoverUpload.vue"
    highlightLines={[14, 15, 16, 17, 18, 19]}
    code={`<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';

const fileList = ref([]);

const beforeUpload = (file: File) => {
  const isImg = file.type.startsWith('image/');
  const under2M = file.size / 1024 / 1024 < 2;
  if (!isImg) ElMessage.error('只能上传图片格式');
  if (!under2M) ElMessage.error('图片大小不能超过 2MB');
  return isImg && under2M; // 返回 false 阻止上传
};
</script>

<template>
  <el-upload
    action="/api/upload"
    list-type="picture-card"
    :before-upload="beforeUpload"
    :file-list="fileList"
    :limit="3"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>
</template>
`}
    takeaway="before-upload 返回 false 可阻止上传；list-type='picture-card' 显示网格缩略图。"
  />
);

// #12 特效：组件预览墙
const Slide12: React.FC = () => (
  <EffectSlide
    title="组件预览墙"
    subtitle="Element Plus 常用组件一览，按类别分组"
    effectType="ComponentShowcaseWall"
    caption="这些组件按需引入后会自动注册，模板里直接写 <el-*> 即可"
    takeaway="认识组件菜单，下次写表单/反馈时知道该点哪个组件。"
  >
    <ComponentShowcaseWall
      title="Element Plus 组件速览"
      items={[
        { name: 'Button', category: '基础组件', desc: '主/次/文字按钮，含图标与加载态', icon: <CheckCircle2 className="h-5 w-5" />, tone: 'indigo' },
        { name: 'Tag', category: '基础组件', desc: '标签分类，多色与圆角风格', icon: <Tag className="h-5 w-5" />, tone: 'emerald' },
        { name: 'Image', category: '基础组件', desc: '图片预览/懒加载/占位', icon: <ImageIcon className="h-5 w-5" />, tone: 'cyan' },
        { name: 'Input', category: '表单组件', desc: '文本/密码/禁用态，支持前后缀', icon: <TextCursor className="h-5 w-5" />, tone: 'cyan' },
        { name: 'Select', category: '表单组件', desc: '下拉单选/多选/远程搜索', icon: <ChevronDown className="h-5 w-5" />, tone: 'emerald' },
        { name: 'Form', category: '表单组件', desc: '表单容器 + rules 校验 + resetFields', icon: <Layers className="h-5 w-5" />, tone: 'violet' },
        { name: 'Upload', category: '表单组件', desc: '图片/文件拖拽上传，picture-card 缩略图', icon: <Upload className="h-5 w-5" />, tone: 'amber' },
        { name: 'DatePicker', category: '表单组件', desc: '日期/日期范围/快捷选项', icon: <Calendar className="h-5 w-5" />, tone: 'indigo' },
        { name: 'Dialog', category: '反馈组件', desc: '弹窗确认/自定义内容/嵌套表单', icon: <LayoutGrid className="h-5 w-5" />, tone: 'rose' },
        { name: 'Message', category: '反馈组件', desc: 'ElMessage 全局提示与通知', icon: <FileText className="h-5 w-5" />, tone: 'amber' },
      ]}
    />
  </EffectSlide>
);

// #13 代码：帖子发布表单整合
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="帖子发布表单整合"
    subtitle="标题 + 内容 + 图片 + 分类，组装「此刻」发布表单"
    language="vue"
    filename="CreatePost.vue"
    highlightLines={[20, 21, 22, 23, 24]}
    code={`<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus';

const formRef = ref<FormInstance>();
const postForm = reactive({
  title: '',
  content: '',
  category: '',
});

const rules: FormRules = {
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  content: [{ required: true, min: 10, message: '至少 10 字', trigger: 'blur' }],
  category: [{ required: true, message: '请选择分类', trigger: 'change' }],
};

const submit = async (formEl?: FormInstance) => {
  await formEl?.validate();
  ElMessage.success('此刻已发布！');
  formEl?.resetFields();
};
const reset = (formEl?: FormInstance) => formEl?.resetFields();
</script>

<template>
  <el-form ref="formRef" :model="postForm" :rules="rules" label-width="72px">
    <el-form-item label="标题" prop="title">
      <el-input v-model="postForm.title" placeholder="一句话此刻" />
    </el-form-item>
    <el-form-item label="内容" prop="content">
      <el-input v-model="postForm.content" type="textarea" :rows="4" />
    </el-form-item>
    <el-form-item label="封面" prop="cover">
      <el-upload action="/api/upload" list-type="picture-card" :limit="1">
        <el-icon><Plus /></el-icon>
      </el-upload>
    </el-form-item>
    <el-form-item label="分类" prop="category">
      <el-select v-model="postForm.category" placeholder="选择分类">
        <el-option label="日常" value="daily" />
        <el-option label="二次元" value="anime" />
        <el-option label="游戏" value="game" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit(formRef)">发布此刻</el-button>
      <el-button @click="reset(formRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
`}
    takeaway="一个 reactive 对象 + 一份 rules + 一个 formRef，就能驱动整张表单。"
  />
);

// #14 动画：表单交互流
const Slide14: React.FC = () => (
  <AnimationSlide
    title="表单交互流"
    subtitle="填写 → 实时校验 → 失败修正 → 提交，跑通完整用户旅程"
    animationType="FormInteraction"
    caption="红色=校验失败 · 绿色=通过 · 琥珀=校验中"
    takeaway="实时校验让用户在提交前就修正错误，体验远胜『提交后报错』。"
  >
    <FormInteractionAnimation
      fields={[
        { label: '帖子标题', type: 'text' },
        { label: '正文内容', type: 'textarea' },
        { label: '封面图片', type: 'upload' },
        { label: '分类标签', type: 'select' },
      ]}
      steps={[
        { label: '填写标题', field: 0, action: 'input', desc: 'v-model 双向绑定' },
        { label: '标题实时校验', field: 0, action: 'validate', desc: 'rules: required' },
        { label: '标题通过', field: 0, action: 'pass', desc: '校验通过' },
        { label: '填写正文', field: 1, action: 'input', desc: 'minlength: 10' },
        { label: '正文失败', field: 1, action: 'fail', desc: '字数不足，红色提示' },
        { label: '补充正文', field: 1, action: 'input', desc: '继续输入至达标' },
        { label: '正文通过', field: 1, action: 'pass', desc: '校验通过' },
        { label: '提交表单', field: 3, action: 'validate', desc: '全部通过 → 发布此刻' },
      ]}
    />
  </AnimationSlide>
);

// #15 提示词：让 AI 生成表单
const Slide15: React.FC = () => (
  <PromptSlide
    title="让 AI 生成表单"
    subtitle="把字段、校验、交互写清楚，AI 一次就能生成可运行组件"
    role="Vue 3 + Element Plus 助理"
    task="生成「此刻」帖子发布表单组件"
    stack="Vue 3 (script setup + TS) / Element Plus / @element-plus/icons-vue"
    constraints="按需引入已配置；标题与内容必填，内容≥10 字；封面单张图片 < 2MB；分类为 日常/二次元/游戏"
    outputFormat="单文件组件 CreatePost.vue，含 template + script setup"
    template={`你是一位熟练的 Vue 3 + Element Plus 工程师。
请生成「此刻」社区帖子发布表单组件 CreatePost.vue：

技术栈：Vue 3 <script setup lang="ts"> + Element Plus（按需引入）

字段与校验：
- title：el-input，required，blur 触发
- content：el-input type="textarea"，required，min 10
- cover：el-upload list-type="picture-card"，limit 1，before-upload 校验图片且 < 2MB
- category：el-select，options 日常/二次元/游戏，required

交互：
- 「发布此刻」按钮调用 formRef.validate()，通过后 ElMessage.success 并 resetFields
- 「重置」按钮调用 resetFields

请输出完整 .vue 文件。`}
    takeaway="结构化提示词五段式（角色/任务/栈/约束/输出）是让 AI 稳定产出的关键。"
  />
);

// #16 概念：表单数据绑定
const Slide16: React.FC = () => (
  <ConceptSlide
    title="表单数据绑定"
    subtitle="v-model + 响应式对象 + 提交序列化，三要点搞清表单数据流"
    badgeText="数据流"
    bullets={[
      'v-model：el-input / el-select 的 v-model 绑定到响应式对象字段，视图与数据同步',
      '响应式对象：用 reactive({...}) 集中托管字段，:model 传入 el-form 作为数据源',
      '提交序列化：validate() 通过后，用 { ...postForm } 或 JSON.stringify 提交给后端',
    ]}
    keyTakeaway="双向绑定 + 集中响应式对象 = 表单数据一站式管理。"
  />
);

// #17 练习：完成帖子发布界面
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="完成帖子发布界面"
    subtitle="为「此刻」社区做好前端表单准备"
    tasks={[
      '在 Vue 3 项目执行 npm install element-plus @element-plus/icons-vue 及按需引入插件',
      '配置 vite.config.ts 的 AutoImport + Components + ElementPlusResolver',
      '用 TRAE CN 生成 CreatePost.vue：标题 + 内容 + 封面 + 分类',
      '为标题 / 内容配置 rules，实现必填与最小长度校验',
      '接入 el-upload picture-card，限制 1 张且 < 2MB',
      '本地 npm run dev 预览交互，截图发企微群打卡',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评你的「此刻」发布表单！"
  />
);

// #18 特效：最终表单效果
const Slide18: React.FC = () => (
  <EffectSlide
    title="最终表单效果"
    subtitle="「此刻」帖子发布表单完整效果预览"
    effectType="FormEffectPreview"
    caption="标题 / 内容 / 封面 / 分类 / 允许评论，覆盖发布帖子的全部字段"
    takeaway="这就是 Day 5 的产出物——一个带校验与上传的完整发布表单。"
  >
    <FormEffectPreview
      title="「此刻」帖子发布表单"
      submitLabel="发布此刻"
      fields={[
        { label: '帖子标题', type: 'text', placeholder: '一句话分享此刻...', required: true },
        { label: '正文内容', type: 'textarea', placeholder: '详细描述你的想法（≥10 字）', required: true },
        { label: '封面图片', type: 'upload', required: false },
        { label: '分类', type: 'select', required: true, options: ['日常', '二次元', '游戏', '技术'] },
        { label: '允许评论', type: 'checkbox' },
      ]}
    />
  </EffectSlide>
);

// #19 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 5 知识检查"
    subtitle="4 道题，确认你掌握了组件库价值、按需引入、ElForm、rules 与 ElUpload"
    questions={[
      {
        question: '使用 Element Plus 等 UI 组件库最核心的价值是？',
        options: [
          '让页面运行速度显著更快',
          '统一设计规范、提升开发效率',
          '替代 Vue 3 框架本身',
          '自动生成后端 API',
        ],
        answer: 1,
        explanation: '组件库的核心价值是一致性、效率、可维护性与无障碍，而非运行性能或替代框架。',
      },
      {
        question: '按需引入 Element Plus 推荐使用哪个 vite 插件组合？',
        options: [
          '@vitejs/plugin-vue 单独使用',
          'unplugin-auto-import + unplugin-vue-components + ElementPlusResolver',
          'vue-loader + babel-plugin-component',
          '手动 import 每个用到的组件',
        ],
        answer: 1,
        explanation: '官方推荐 unplugin-auto-import 与 unplugin-vue-components 配合 ElementPlusResolver 实现自动按需引入。',
      },
      {
        question: 'el-form-item 的哪个属性必须与 rules 中的 key 对齐才能触发校验？',
        options: ['label', 'prop', 'model', 'name'],
        answer: 1,
        explanation: 'el-form-item 通过 prop 字段名匹配 rules 中对应的校验规则。',
      },
      {
        question: 'el-upload 的 before-upload 钩子返回什么值会阻止上传？',
        options: ['返回 true', '返回 false', '返回 undefined', '返回一个字符串'],
        answer: 1,
        explanation: 'before-upload 返回 false 会取消上传；返回 Promise 则由其 resolve/reject 决定是否继续。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="前端组件化里程碑达成，明天正式进入后端"
    dayNumber={5}
    takeaways={[
      'UI 组件库带来一致性、效率、可维护、无障碍四大价值',
      'Element Plus 用 unplugin 三件套实现按需引入，开箱即用',
      'el-form + rules + prop 完成双向绑定与表单校验',
      'el-upload 的 before-upload 钩子控制图片格式与大小',
      '「此刻」帖子发布表单已就绪，前端组件化里程碑达成',
    ]}
    nextDayPreview="Day 6 — 进入后端：Spring Boot 3 项目骨架与第一个 GET API"
  />
);

const Render: React.FC<{ slideIndex: number }> = ({ slideIndex }) => {
  switch (slideIndex) {
    case 0:
      return <Slide01 />;
    case 1:
      return <Slide02 />;
    case 2:
      return <Slide03 />;
    case 3:
      return <Slide04 />;
    case 4:
      return <Slide05 />;
    case 5:
      return <Slide06 />;
    case 6:
      return <Slide07 />;
    case 7:
      return <Slide08 />;
    case 8:
      return <Slide09 />;
    case 9:
      return <Slide10 />;
    case 10:
      return <Slide11 />;
    case 11:
      return <Slide12 />;
    case 12:
      return <Slide13 />;
    case 13:
      return <Slide14 />;
    case 14:
      return <Slide15 />;
    case 15:
      return <Slide16 />;
    case 16:
      return <Slide17 />;
    case 17:
      return <Slide18 />;
    case 18:
      return <Slide19 />;
    case 19:
      return <Slide20 />;
    default:
      return <Slide01 />;
  }
};

export const day05Deck: DayDeckRenderer = {
  meta: {
    day: 5,
    stageName: '第四阶段：现代前端',
    title: 'Day 5 — Element Plus 组件库 · 帖子发布表单',
    subtitle: '用 UI 组件库高效搭建「此刻」帖子发布表单',
    duration: '90 分钟',
    target: '掌握 Element Plus 按需引入、ElForm 双向绑定与校验、ElUpload 图片上传',
    output: '「此刻」帖子发布表单（标题/内容/图片/分类，含校验与上传）',
    aiPractice: 'TRAE CN 对话 → "用 Vue 3 + Element Plus 生成帖子发布表单，含图片上传"',
    slides: [
      { id: 'd5-s1', title: 'Element Plus 组件库', subtitle: '用 UI 组件库高效搭建「此刻」帖子发布表单', layout: 'cover' },
      { id: 'd5-s2', title: 'Day 5 学习路线图', subtitle: '组件库认知→安装→表单→上传→整合 5 目标', layout: 'steps' },
      { id: 'd5-s3', title: 'UI 组件库的价值', subtitle: '一致性/效率/可维护/无障碍 四大价值', layout: 'concept' },
      { id: 'd5-s4', title: '手写组件 vs 组件库', subtitle: '耗时 vs 开箱即用 / 风格不一 vs 统一规范', layout: 'comparison' },
      { id: 'd5-s5', title: 'Element Plus 介绍', subtitle: 'Vue3 生态/丰富组件/按需引入/主题定制 四特点', layout: 'concept' },
      { id: 'd5-s6', title: '安装 Element Plus', subtitle: 'npm install element-plus + 按需引入插件', layout: 'split_code' },
      { id: 'd5-s7', title: '按需引入配置', subtitle: 'vite.config.ts + unplugin-auto-import 配置', layout: 'split_code' },
      { id: 'd5-s8', title: '表单组件动效', subtitle: '输入→校验→提交 交互流', layout: 'concept' },
      { id: 'd5-s9', title: 'ElForm 基础用法', subtitle: 'el-form / el-form-item / v-model 双向绑定', layout: 'split_code' },
      { id: 'd5-s10', title: '表单校验规则', subtitle: 'rules + required / minlength / 自定义校验', layout: 'split_code' },
      { id: 'd5-s11', title: 'ElUpload 上传组件', subtitle: '图片上传 + action + before-upload', layout: 'split_code' },
      { id: 'd5-s12', title: '组件预览墙', subtitle: 'Button/Input/Select/Dialog 卡片墙', layout: 'concept' },
      { id: 'd5-s13', title: '帖子发布表单整合', subtitle: '标题+内容+图片+分类 完整表单', layout: 'split_code' },
      { id: 'd5-s14', title: '表单交互流', subtitle: '填写→实时校验→提交→重置 动效', layout: 'concept' },
      { id: 'd5-s15', title: '让 AI 生成表单', subtitle: '角色:Vue助理 / 任务:帖子发布表单 / 栈:Vue3+ElementPlus', layout: 'prompt_template' },
      { id: 'd5-s16', title: '表单数据绑定', subtitle: 'v-model / 响应式对象 / 提交序列化 三要点', layout: 'concept' },
      { id: 'd5-s17', title: '完成帖子发布界面', subtitle: '安装→配置→表单→上传→预览→打卡', layout: 'exercise' },
      { id: 'd5-s18', title: '最终表单效果', subtitle: '完整表单截图 + 交互预览', layout: 'concept' },
      { id: 'd5-s19', title: 'Day 5 知识检查', subtitle: '组件库价值/按需引入/ElForm/rules/ElUpload 4 题', layout: 'concept' },
      { id: 'd5-s20', title: '今日总结', subtitle: '前端组件化 + 明日 Spring Boot 后端入门', layout: 'summary' },
    ],
  },
  Render,
};