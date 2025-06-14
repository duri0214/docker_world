/**
 * MCPツール呼び出しリクエストの型
 * @description reverse_textツールの呼び出しリクエスト
 * @property {string} name - ツール名（固定で "reverse_text"）
 * @property {{ text: string }} arguments - ツールに渡す引数オブジェクト
 * @property {string} arguments.text - 逆順にしたい文字列
 * @note MCPクライアントライブラリが内部的に_metaプロパティやその他の追加プロパティを付与する可能性があるため、index signatureを含めています
 */
export interface McpToolCallRequest {
  name: "reverse_text";
  arguments: {
    text: string;
  };
  [key: string]: any;
}

/**
 * MCPツール呼び出しレスポンスの型
 * @property {{ type: string; text: string; }[]} content - ツールの実行結果を含む配列
 * @property {"text"} content[].type - コンテンツのタイプ（固定で "text"）
 * @property {string} content[].text - 出力される文字列
 */
export interface McpToolCallResponse {
  content: Array<{
    type: "text";
    text: string;
  }>;
}
