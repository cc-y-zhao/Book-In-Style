from xxlimited import new
from flask import Blueprint, request
from app.models import db, Image
from flask_login import current_user, login_required
from app.s3_helpers import upload_file_to_s3, allowed_file, get_unique_filename

image_routes = Blueprint("images", __name__)

@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
  print("\n\n\n request.files: \n\n\n", request.files, '\n\n\n')
  if "image" not in request.files:
      return {"errors": "image required"}, 400

  image = request.files["image"]
  # business_id = request.files["business_id"]
  print("\n\n\n request.files: \n\n\n", request.files, '\n\n\n')
  # print("\n\n\n business_id: \n\n\n", business_id, '\n\n\n')


  if not allowed_file(image.filename):
    return {"errors": "file type not permitted"}, 400

  image.filename = get_unique_filename(image.filename)

#   print("\n\n\image after get unique filename: \n\n\n", image.filename, "\n\n\n")

  upload = upload_file_to_s3(image)

  print("\n\n\nupload: \n\n\n", upload)


  if "url" not in upload:
    # if the dictionary doesn't have a filename key
    # it means that there was an error when we tried to upload
    # so we send back that error message
    return upload, 400

  url = upload["url"]
  # we can use the
  new_image = Image(img_url=url, business_id=2)
  # new_image.business_id = business_id
  db.session.add(new_image)
  db.session.commit()
  return {"url": url}
