#define TRACE_MODULE _sgw_handler

#include "core_debug.h"

#include "event.h"
#include "sgw_path.h"
#include "s11_handler.h"

void sgw_s11_handle_create_session_request(
        gtp_xact_t *xact, gtp_message_t *gtp_message)
{
    d_assert(sgw_s5c_send_to_pgw(xact, gtp_message), return, 
            "failed to send message");
}
