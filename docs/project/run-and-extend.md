# 运行方式与扩展方向

## 本教程站点运行

```bash
npm install
npm run docs:dev
```

## 扩展方向（毕业设计可选）

1. **加入 RAG**：把“检索”做成标准 Tool。
2. **加入 Planner**：先规划再执行，形成两阶段 Agent。
3. **加入评测集**：固定 20 个任务做回归评测。
4. **加入多 Agent**：拆分为 Planner / Executor / Reviewer。

## 常见坑

- 把“prompt 调优”当成全部：缺少评测会导致回归不可见。
- 缺少工具超时与重试：线上稳定性差。
- Session 不可回放：调试成本指数上升。
