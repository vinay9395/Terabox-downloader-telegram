const sendFile = async (item, ctx) => {
  if (item) {
    try {
      await ctx.replyWithDocument(item);
    } catch (e) {
      ctx.replyWithMarkdown(
        `⚠️ ${e.message}\n\n👉  manually download it from [here](${item})\n\n👉 * This File Is Too Large Or Cannot Accessible From Terabox*`,
      );
    }
  }
};

module.exports = {
  sendFile,
};
