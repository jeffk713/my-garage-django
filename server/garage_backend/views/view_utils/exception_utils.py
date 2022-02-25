def get_error_message_list(error):
    error_list = []
    for key, val in error.items():
        error_list.append(f"{key}: {val[0]}")
    return error_list