def get_object_by_id(model, pk):
    try:
        return model.objects.get(pk=pk)
    except model.DoesNotExist:
        return None