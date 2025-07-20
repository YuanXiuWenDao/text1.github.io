import os
from flask import Flask, send_from_directory

app = Flask(__name__)

# 项目根目录（根据你的实际路径修改）
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
IMAGE_DIR = os.path.join(BASE_DIR, "images")  # 图片存放目录


@app.route('/check_image/<filename>')
def check_image(filename):
    """测试图片是否能通过路径访问"""
    try:
        # 检查图片是否存在
        image_path = os.path.join(IMAGE_DIR, filename)
        if not os.path.exists(image_path):
            return f"图片不存在：{image_path}", 404

        # 返回图片
        return send_from_directory(IMAGE_DIR, filename)
    except Exception as e:
        return f"错误：{str(e)}", 500


if __name__ == '__main__':
    # 打印关键路径信息（调试用）
    print(f"项目根目录：{BASE_DIR}")
    print(f"图片目录：{IMAGE_DIR}")
    print("请访问 http://127.0.0.1:5000/check_image/VR.jpg 测试")

    app.run(debug=True)