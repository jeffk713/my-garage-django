from garage_backend import models


def get_object_by_id(model, pk):
    try:
        return model.objects.get(pk=pk)
    except model.DoesNotExist:
        return None
    
def get_user_by_email(email):
    try:
        return models.User.objects.get(email=email)
    except models.User.DoesNotExist:
        return None