#include "OpenWeb.h"

bool OpenWeb::open(const char* url)
{
    NSString *urlBase = [NSString stringWithCString:url encoding:NSUTF8StringEncoding];
    [[UIApplication sharedApplication] openURL: [NSURL URLWithString:urlBase ]];
    return true;
}