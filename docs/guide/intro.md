# 课程介绍

## 你将学到什么

1. **Agent 的本质**：一个“可循环决策 + 可调用工具 + 可维护状态”的系统。
2. **Pi 的核心思想**：
   - 统一模型接口（多 Provider）
   - Agent Runtime（工具调用 + 状态管理）
   - 可扩展外壳（CLI/TUI/扩展）
3. 如何用 TypeScript（Node.js + React）实现一个教学版 Agent。

## 先统一术语

| 术语 | 含义 | 在教程中的对应 |
| --- | --- | --- |
| LLM Adapter | 不同模型厂商 API 的统一封装 | `llm/adapter.ts` |
| Agent Loop | 感知→思考→行动→观察→再思考 | `agent/loop.ts` |
| Tool | Agent 可调用的外部能力 | `tools/*.ts` |
| Session | 多轮上下文与轨迹持久化 | `session/store.ts` |

## Pi 项目观察（高层）

Pi 官方仓库将能力拆成三个关键包：

- `@earendil-works/pi-ai`：统一多模型 Provider 接口。
- `@earendil-works/pi-agent-core`：Agent runtime（tool calling + state）。
- `@earendil-works/pi-coding-agent`：面向编码场景的交互式 CLI。

这也是本教程分层设计的依据。
