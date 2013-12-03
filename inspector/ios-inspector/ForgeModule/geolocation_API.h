//
//  geolocation_API.h
//  ForgeInspector
//
//  Created by Connor Dunn on 27/07/2012.
//  Copyright (c) 2012 Trigger Corp. All rights reserved.
//


#import <Foundation/Foundation.h>

@interface geolocation_API : NSObject

+ (void)getCurrentPosition:(ForgeTask*)task enableHighAccuracy:(NSNumber*)highAccuracy;

@end
