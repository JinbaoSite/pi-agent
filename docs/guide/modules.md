# 核心模块拆解

## 1) LLM 统一接口层

目标：屏蔽 OpenAI/Anthropic/Google 在请求格式、流式输出、工具调用字段上的差异。

最小接口建议：

```ts
export interface LLMClient {
  generate(input: AgentMessage[], tools?: ToolSpec[]): Promise<ModelOutput>
}
```

## 2) Agent Runtime 层

核心职责：

- 维护 loop 迭代次数与停止条件
- 解析模型输出（普通文本 / 工具调用）
- 调度工具并反馈 observation

## 3) Tool 层

设计要点：

- 工具是**纯能力单元**：有 schema、有超时、有错误边界
- 用 registry 做动态发现，避免硬编码 if/else

## 4) Session 层

最低要保存：

- 用户消息
- 模型消息
- 工具调用与结果
- token 与耗时等元信息（可选）
